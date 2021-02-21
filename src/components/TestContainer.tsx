import React, {useState} from 'react';
import './ExploreContainer.css';
import {
    IonButton,
    IonCard,
    IonCardHeader, IonCardTitle, IonDatetime,
    IonInput,
    IonItem,
    IonLabel, IonList, IonRadio, IonRadioGroup,
    IonTextarea,
    useIonViewWillEnter
} from "@ionic/react";
import {useStorage} from "@ionic/react-hooks/storage";
import { v4 as uuidv4 } from 'uuid';

interface ContainerProps { }

const TestContainer: React.FC<ContainerProps> = () => {
    const { get, set } = useStorage();
    const ACTIVE_TEST = "activeTest";

    const [data, setData] = useState<any>([]);
    const [selected, setSelected]= useState<string>("Freilaufend")
    const [selectedDate, setSelectedDate] = useState<string>('');


    const state = {
        id:'',
        date: new Date(),
        description: '',
        selectedDate: '',
        tierart:'',
        anzahl:0,
        selection:''
    };



    useIonViewWillEnter(() => {
        async function loadData() {
            const loadedData = await getData();
            if(loadedData) {
                let obj = JSON.parse(loadedData);
                setData(obj);
            }
        }

        loadData();
    }, [data]);


    const getData = () => {
        return get(ACTIVE_TEST);
    }

    const setDescription = (data: any) => {
        state.description = data;
    }
    const setTierart = (data: any) => {
        state.tierart = data;
    }
    const setAnzahl = (data: any) => {
        state.anzahl = data;
    }

    const openTestList = () => {
        saveExperimentToStorage()
    }

    const saveExperimentToStorage = async () => {
        state.id = uuidv4();
        state.selection = selected;
        state.selectedDate = selectedDate;
        let ret = await get(data.id);
        if(ret) {
            let obj: Object = JSON.parse(ret);
            let count = 1
            for (let i of Object.entries(obj)) {
                console.log(i);
                count++
            }
            let name = "testlauf"+count;
            Object.assign(obj, {[name]:state})
            console.log(obj);

            set(data.id, JSON.stringify(obj));
        } else {
            let obj = {
                testlauf1 : state
            }
            set(data.id, JSON.stringify(obj))
        }
    }



    return (
    <div className="container">
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{data.title}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
        <IonCard>

            <IonItem>
                <IonLabel>Zeitpunkt</IonLabel>
                <IonDatetime displayFormat="D MMM YYYY H:mm" min="2019" max="2025" placeholder="Datum auswählen" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Tierart</IonLabel>
                <IonInput required type="text" onIonInput={(data: any) => setTierart(data.target.value)}
                          value={state.tierart}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Anzahl</IonLabel>
                <IonInput required type="number" onIonInput={(data: any) => setAnzahl(data.target.value)}
                          value={state.anzahl}/>
            </IonItem>
            <IonList>
                <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>

                    <IonItem>
                        <IonLabel>Freilaufend</IonLabel>
                        <IonRadio slot="start" value="Freilaufend" />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Freilaufgehege</IonLabel>
                        <IonRadio slot="start" value="Freilaufgehege" />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Gehege</IonLabel>
                        <IonRadio slot="start" value="Gehege" />
                    </IonItem>
                </IonRadioGroup>
            </IonList>

            <IonItem>
                <IonLabel position="floating">Beschreibung der Testdurchführung</IonLabel>
                <IonTextarea value={state.description} onIonChange={(data: any) => setDescription(data.detail.value)}/>
            </IonItem>

            <IonButton expand="block" onClick={() => openTestList()} routerLink="/testList">
                Testdurchlauf speichern
            </IonButton>
        </IonCard>
      </div>
  );
};

export default TestContainer;
