import { types } from "../../types/types";

describe('Pruebas en los types', () => {

    test('Debe ser igual al JSON de los types', () => {

        const typesCopy = {
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            notesNewEntry: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesAddNew: '[Notes] Add new note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Updated notes',
            notesFileUrl: '[Notes] Updated image url',
            notesDelete: '[Notes] Deleted note',
            notesLogoutCleaning: '[Notes] Logout cleaning',
        };

        expect(types).toEqual(typesCopy);
    })
});