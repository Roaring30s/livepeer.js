import {
  LivepeerConfig,
  Player,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import getConfig from 'next/config';
import Image from 'next/image';
import * as React from 'react';

import waterfallsPoster from '../../public/next.svg';

const { publicRuntimeConfig } = getConfig();
const { STUDIOTOKEN } = publicRuntimeConfig;

const client = createReactClient({
  provider: studioProvider({ apiKey: STUDIOTOKEN }),
});

const livepeerTheme: ThemeConfig = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};

const PosterImage = () => {
  return (
    <Image
      src={waterfallsPoster}
      alt="waterfull"
      priority
      placeholder="blur"
      className="object-cover"
      blurDataURL="https://theboutiqueadventurer.com/wp-content/uploads/2022/11/seljalandsfoss-waterfall.jpg.webp" //must be link not data:image
    />
  );
};

const playbackId =
  'bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe';

export default function MyPlayer() {
  return (
    <LivepeerConfig client={client} theme={livepeerTheme}>
      <div className="h-[200px]">
        <Player
          title="Waterfalls"
          playbackId={playbackId}
          loop
          autoPlay
          muted
          showTitle={false}
          poster={<PosterImage />}
        />
      </div>
    </LivepeerConfig>
  );
}
