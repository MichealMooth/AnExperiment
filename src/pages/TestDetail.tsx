import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import './TestDetail.css';
import TestDetailContainer from "../components/TestDetailContainer";

const TestDetail: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="testList"/>
                    </IonButtons>
                    <IonTitle>Testdurchlauf anzeigen</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="testList"/>
                        </IonButtons>
                        <IonTitle>Testdurchlauf anzeigen</IonTitle>
                        <IonTitle size="large">AnExperiment</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <TestDetailContainer/>
            </IonContent>
        </IonPage>
    );
};

export default TestDetail;
