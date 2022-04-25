import { NextPage } from 'next';
import React from 'react';
import ChoicesScreen from '../Components/ChoicesScreen/choicesScreen';
import { IOption } from '../Models/option';

const placeScreen: NextPage = () => {
    const placesIcons: IOption[] = [{title: 'מחוץ ליחידה', icon: 'nightCamping.svg'}, {title: 'בתוך היחידה', icon: 'home.jpeg'}];
    
    return (
        <ChoicesScreen header='?איפה השמירה/תורנות' icons={placesIcons} linkTo='/forWhomScreen' />
    )
}

export default placeScreen;
