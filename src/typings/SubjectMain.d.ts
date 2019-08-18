/*
 * @Author: Luoxd
 * @Description: 
 * @Date: 2019-08-12 14:35:19
 * @LastEditTime: 2019-08-12 14:53:08
 * @LastEditors: Luoxd
 */
declare namespace SubjectMain {
    export interface AnyKey {
        [index: string]: any
    }
    export interface IStore {
        dispatch: any
        compoennts: string[]
        componentData: AnyKey
        editComponent: AnyKey
        [index: string]: any
    }
}