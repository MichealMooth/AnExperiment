import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import './CreateExperiment.css';
import TestContainer from "../components/TestContainer";

const Test: React.FC = () => {
    return (
        <IonPage>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="home"/>
                    </IonButtons>
                    <IonTitle>Eine neue Testdurchführung anlegen</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <TestContainer />
            </IonContent>
        </IonPage>
    );
};

export default Test;
