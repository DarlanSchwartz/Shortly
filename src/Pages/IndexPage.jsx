import { useState } from 'react';
import Logo from '../Components/Logo';
import RankingComponent from '../Components/RankingComponent';

export default function IndexPage() {

  return (
    <div>
        <p>IndexPage</p>
        <Logo/>

        <RankingComponent/>
    </div>
  )
}