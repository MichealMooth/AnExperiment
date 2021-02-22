import React from 'react';
import './ExploreContainer.css';
import {IonButton, IonInput, IonItem, IonLabel, IonTextarea} from "@ionic/react";
import {useStorage} from "@ionic/react-hooks/storage";
import { v4 as uuidv4 } from 'uuid';


interface ContainerProps {
}

const TEST_STORAGE = "test";


const CreateExperimentContainer: React.FC<ContainerProps> = () => {
    const { get, set } = useStorage();



    //initialisieren der Felder
    const state = {
            id:'',
            title: '',
            date: new Date(),
            description: '',
            context:''

    };


    const createExperiment = (data: any) => {
        //setzen einer Unique ID für spätere eindeutigkeit der Tests
        state.id = uuidv4();
        saveExperimentToStorage();
    }
    const setTitle = (data: any) => {
        state.title = data;
    }

    const setDescription = (data: any) => {
        state.description = data;
    }
    const setKontext = (data: any) => {
        state.context = data;
    }

    const saveExperimentToStorage = async () => {
        let ret = await get(TEST_STORAGE);
        if(ret) {
            let obj: Object = JSON.parse(ret);
            let count = 1
            for (let i of Object.entries(obj)) {
                console.log(i);
                count++
            }
            let name = "test"+count;
            Object.assign(obj, {[name]:state})

            set(TEST_STORAGE, JSON.stringify(obj));
        } else {
            let data = {
                test1 : state
            }
            set(TEST_STORAGE, JSON.stringify(data))
        }
    }


    return (
        <div className="container">

            <IonItem>
                <IonLabel position="floating">Titel</IonLabel>
                <IonInput required type="text" onIonInput={(data: any) => setTitle(data.target.value)}
                          value={state.title}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Beschreibung</IonLabel>
                <IonTextarea value={state.description} rows={4} onIonChange={(data: any) => setDescription(data.detail.value)}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Kontext</IonLabel>
                <IonTextarea value={state.context} rows={4} onIonChange={(data: any) => setKontext(data.detail.value)}/>
            </IonItem>

            <IonButton expand="block" onClick={e => createExperiment(e)} routerLink="/home">
                Experiment erstellen
            </IonButton>
        </div>

    );


};

export default CreateExperimentContainer;
