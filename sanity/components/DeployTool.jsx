import React, { useState } from 'react'
import { Card, Stack, Text, Button, Flex, Container, Box, Inline } from '@sanity/ui'
import { RocketIcon, PublishIcon } from '@sanity/icons'

export function DeployTool() {
  const [deployStatus, setDeployStatus] = useState('idle')
  const [publishStatus, setPublishStatus] = useState('idle')

  const DEPLOY_HOOK_URL = 'https://api.vercel.com/v1/integrations/deploy/prj_3suHAgJLL1PXyO5cNw1eMEqH4Hg3/78zqSnSP3N' 

  const handlePublishAll = async () => {
    if (!confirm('This will publish ALL draft changes across the entire website. Are you sure?')) return

    setPublishStatus('loading')
    try {
      const res = await fetch('/api/sanity/publish-all', { method: 'POST' })
      const data = await res.json()
      if (res.ok) {
        setPublishStatus('success')
        setTimeout(() => setPublishStatus('idle'), 5000)
      } else {
        alert('Error: ' + (data.error || 'Failed to publish'))
        setPublishStatus('error')
      }
    } catch (err) {
      alert('Connection error: ' + err.message)
      setPublishStatus('error')
    }
  }

  const handleDeploy = async () => {
    if (!DEPLOY_HOOK_URL) {
      alert('Please configure the DEPLOY_HOOK_URL in sanity/components/DeployTool.jsx')
      return
    }

    setDeployStatus('loading')
    try {
      const res = await fetch(DEPLOY_HOOK_URL, { method: 'POST' })
      if (res.ok) {
        setDeployStatus('success')
        setTimeout(() => setDeployStatus('idle'), 5000)
      } else {
        setDeployStatus('error')
      }
    } catch (err) {
      setDeployStatus('error')
    }
  }

  return (
    <Container width={1}>
      <Card margin={4} padding={4} radius={2} shadow={1}>
        <Stack space={5}>
          <Flex align="center" gap={3}>
            <RocketIcon style={{ fontSize: 24, color: '#2276fc' }} />
            <Text size={4} weight="bold">Deployment & Publishing Control</Text>
          </Flex>
          
          <Text size={2} muted>
            Use these controls to manage your live website content.
          </Text>

          {/* STEP 1: PUBLISH */}
          <Card padding={4} border radius={3} tone={publishStatus === 'success' ? 'positive' : 'default'}>
            <Stack space={4}>
              <Text weight="bold" size={2}>Step 1: Publish All Changes</Text>
              <Text size={1} muted>If you don't see the "Publish" button on individual pages, use this to force-publish all drafts at once.</Text>
              <Box>
                <Button
                  fontSize={2}
                  padding={3}
                  text={publishStatus === 'loading' ? 'Publishing...' : publishStatus === 'success' ? 'All Changes Published!' : 'Publish All Drafts'}
                  tone="positive"
                  onClick={handlePublishAll}
                  disabled={publishStatus === 'loading'}
                  icon={PublishIcon}
                />
              </Box>
            </Stack>
          </Card>

          {/* STEP 2: DEPLOY */}
          <Card padding={4} border radius={3} tone={deployStatus === 'success' ? 'positive' : 'default'}>
            <Stack space={4}>
              <Text weight="bold" size={2}>Step 2: Push to Live Website</Text>
              <Text size={1} muted>Trigger a fresh build on Vercel to show your published changes on the live site.</Text>
              <Box>
                <Button
                  fontSize={2}
                  padding={3}
                  text={deployStatus === 'loading' ? 'Deploying...' : deployStatus === 'success' ? 'Build Triggered!' : 'Push to Live'}
                  tone="primary"
                  onClick={handleDeploy}
                  disabled={deployStatus === 'loading'}
                  icon={RocketIcon}
                />
              </Box>
            </Stack>
          </Card>

          {(deployStatus === 'error' || publishStatus === 'error') && (
            <Text size={2} tone="critical">
              An error occurred. Please check your connection or contact support.
            </Text>
          )}
        </Stack>
      </Card>
    </Container>
  )
}
