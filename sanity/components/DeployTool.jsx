import React, { useState } from 'react'
import { Card, Stack, Text, Button, Flex, Container, Box } from '@sanity/ui'
import { RocketIcon } from '@sanity/icons'

export function DeployTool() {
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  // IMPORTANT: The user should replace this with their actual Vercel/Netlify Deploy Hook URL
  const DEPLOY_HOOK_URL = 'https://api.vercel.com/v1/integrations/deploy/prj_3suHAgJLL1PXyO5cNw1eMEqH4Hg3/78zqSnSP3N' 

  const handleDeploy = async () => {
    if (!DEPLOY_HOOK_URL) {
      alert('Please configure the DEPLOY_HOOK_URL in sanity/components/DeployTool.jsx')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(DEPLOY_HOOK_URL, { method: 'POST' })
      if (res.ok) {
        setStatus('success')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <Container width={1}>
      <Card margin={4} padding={4} radius={2} shadow={1}>
        <Stack space={4}>
          <Flex align="center" gap={3}>
            <RocketIcon style={{ fontSize: 24, color: '#2276fc' }} />
            <Text size={4} weight="bold">Deploy to Live Website</Text>
          </Flex>
          
          <Text size={2} muted>
            Clicking the button below will trigger a new build of your live website. 
            Use this after making significant content changes in the Studio.
          </Text>

          <Box paddingY={2}>
            <Button
              fontSize={3}
              padding={4}
              text={status === 'loading' ? 'Deploying...' : status === 'success' ? 'Build Triggered!' : 'Push to Live'}
              tone={status === 'error' ? 'critical' : status === 'success' ? 'positive' : 'primary'}
              onClick={handleDeploy}
              disabled={status === 'loading'}
              icon={RocketIcon}
            />
          </Box>

          {status === 'error' && (
            <Text size={2} tone="critical">
              Failed to trigger build. Please check your network connection and webhook URL.
            </Text>
          )}

          {!DEPLOY_HOOK_URL && (
            <Card padding={3} tone="caution" radius={2}>
              <Text size={1}>
                <strong>Action Required:</strong> You need to set your Build Webhook URL in <code>sanity/components/DeployTool.jsx</code> to make this button work.
              </Text>
            </Card>
          )}
        </Stack>
      </Card>
    </Container>
  )
}
