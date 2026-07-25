import React from 'react';
import { registerRoot, Composition } from 'remotion';
import { Explainer } from './Explainer';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ExplainerVideo"
        component={Explainer}
        durationInFrames={450}
        fps={30}
        width={1200}
        height={630}
      />
    </>
  );
};

registerRoot(RemotionRoot);
