import { createSlice, nanoid } from '@reduxjs/toolkit';
// const items = [];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },

  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },

      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const selectContacts = state => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
