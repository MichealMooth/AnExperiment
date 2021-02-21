import React, { useState} from 'react';
import './ExploreContainer.css';
import {useStorage} from "@ionic/react-hooks/storage";
import { IonItem, IonLabel, IonButton} from "@ionic/react";
import { useIonViewWillEnter } from "@ionic/react";



interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {



    const TEST_STORAGE = "test";
    const tests: any[] = [];

    const { get, set } = useStorage();
    const [data, setData] = useState<any[]>([]);
    const ACTIVE_TEST = "activeTest"


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
                setData(tests);

            }
        }

        loadData();
    }, [data]);

    const getTests = () => {
        return get(TEST_STORAGE);
    }

    const openTest = (data:any) => {
        set(ACTIVE_TEST, JSON.stringify(data));
    }
    const openTestList = (data:any) => {
        set(ACTIVE_TEST, JSON.stringify(data));
    }


    return (
    <div className="container">
        {data.map(test => (
            <IonItem key={test.title} onClick={() => openTest(test) } routerLink="/test" button>
                <IonLabel>
                    <h2>{test.title}</h2>
                    <p>{test.description}</p>
                </IonLabel>
                <IonButton expand="block" size="small" onClick={() => openTestList(test)} routerLink='/testList'>
                    Tests
                </IonButton>
            </IonItem>
        ))
        }
    </div>
  );
};

export default ExploreContainer;
