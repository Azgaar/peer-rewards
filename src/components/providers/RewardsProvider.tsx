import React, { Dispatch, FC, useContext, useEffect, useMemo, useState } from 'react';
import { IReward } from '../../types';
import { fetchJSON } from '../../utils';

export const RewardsContext = React.createContext([] as IReward[]);

const RewardsProvider: FC = ({ children }) => {
  const [rewards, setRewards] = useState([] as IReward[]);

  const value = useMemo(() => ({rewards, setRewards}, [rewards]);

  useEffect(() => {
    fetchJSON('/mockups/rewards.json', (json) => setRewards(json));
  }, []);

  return <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>;
};

const useRewards = (): {rewards: IReward[], setRewards: Dispatch<React.SetStateAction<IReward[]>>} => useContext(RewardsContext);

export { RewardsProvider, useRewards };
