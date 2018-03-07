import { Item } from "../../../shared/models/item";
import { State } from "../../../shared/enum/state.enum";

export const COLLECTION : Item[] =[
    {
        id:'a1',
        name :'Houssem',
        reference:'1234',
        state: State.ALIVRER
    },
    {
        id:'b1',
        name :'Abd Esslam',
        reference:'5678',
        state: State.ENCOURS
    },
    {
        id:'c2',
        name :'Christofer',
        reference:'1364',
        state: State.LIVREE
    }
]