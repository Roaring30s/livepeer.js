import { Player, type WebhookPlaybackPolicy } from '@livepeer/react';

import fetch from 'cross-fetch';

import type { SecretResponse } from './api/secret';

const Page = () => {
  return (
    <>
      <Player
        autoPlay
        muted
        playbackId="3330zn7r1adtxmpn"
        loop
        onAccessKeyRequest={async (
          playbackPolicy: WebhookPlaybackPolicy<{ userId: string }>,
        ) => {
          // await new Promise((r) => setTimeout(r, 10000));

          const result = await fetch('/api/secret', {
            method: 'POST',
            body: JSON.stringify({
              userId: playbackPolicy.webhookContext.userId,
            }),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
          const json: SecretResponse = await result.json();

          return json.secret;
        }}
      />
    </>
  );
};

export default Page;
