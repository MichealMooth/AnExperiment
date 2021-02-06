import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './CreateExperiment.css';
import TestListContainer from "../components/TestListContainer";

const TestList: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Test Liste</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">AnExperiment</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <TestListContainer />
            </IonContent>
        </IonPage>
    );
};

export default TestList;
