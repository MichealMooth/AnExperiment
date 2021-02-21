import React, { useState} from 'react';
import './ExploreContainer.css';
import {useStorage} from "@ionic/react-hooks/storage";
import { IonItem, IonLabel, IonButton} from "@ionic/react";
import { useIonViewWillEnter } from "@ionic/react";



interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {


    interface testInterface {
        id:string,
        title: string,
        date: string,
        description: string,
        context:string

    }

    const TEST_STORAGE = "test";
    const tests: any[] = [];
    const state = {
        id:'',
        title: '',
        date: new Date(),
        description: '',
        context:''

    };

    const { get } = useStorage();
    const [data, setData] = useState<any[]>([]);

    useIonViewWillEnter(() => {
        async function loadData() {
            tests.length=0;
            const loadedData = await getTests();
            if(loadedData) {
                let obj = JSON.parse(loadedData);
                for (const [key, value] of Object.entries(obj)) {
                    console.log(key);
                    tests.push(value);
                }
                for( let test of tests) {
                    state.id = test.id;
                    state.title = test.title;
                    state.date = test.date;
                    state.description = test.description;
                    state.context = test.context;
                }
                setData(tests);
                console.log(state);

            }
        }

        loadData();
    }, [data]);

    const getTests = () => {
        return get(TEST_STORAGE);
    }

    const openTest = (data:any) => {

    }
    const openTestList = (data:any) => {

    }

    return (
    <div className="container">
        {data.map(test => (
            <IonItem key={test.title} onClick={() => openTest(test) } routerLink="/test" button>
                <IonLabel>
                    <h2>{test.title}</h2>
                    <p>{test.id}</p>
                </IonLabel>
                <IonButton expand="block" size="small" onClick={() => openTestList(test)} routerLink="/testList">
                    Tests
                </IonButton>
            </IonItem>
        ))
        }
    </div>
  );
};

export default ExploreContainer;
