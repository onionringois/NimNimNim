import { NextPage } from 'next';
import React from 'react';
import ChoicesScreen from '../Components/ChoicesScreen/choicesScreen';
import { IOption } from '../Models/option';

const forWhomScreen: NextPage = () => {
    const placesIcons: IOption[] = [{title: 'בשבילי', icon: 'nightCamping.svg'}, {title: 'אחר', icon: 'home.jpeg'}];
    
    return (
        <ChoicesScreen header='?בשביל מי הטופס' icons={placesIcons} linkTo='/' />
    )
}

export default forWhomScreen;
