import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import './CreateExperiment.css';
import TestListContainer from "../components/TestListContainer";

const TestList: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="home"/>
                    </IonButtons>
                    <IonTitle>Test Läufe</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="home"/>
                        </IonButtons>
                        <IonTitle>Test Läufe</IonTitle>
                        <IonTitle size="large">AnExperiment</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <TestListContainer />
            </IonContent>
        </IonPage>
    );
};

export default TestList;
