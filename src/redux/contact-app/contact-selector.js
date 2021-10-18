export const getFilterFromState = state => state.filter;

// // contactlist
// export const getVisibleContacts = ({ contacts: { items, filter } }) => {
//   const normalizedFilter = filter.toLowerCase();

//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// export const getVisibleContacts = (data,filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     if (data) {
//       return data.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter),
//       );
//     }
//   };
//   const filteredContacts = getVisibleContacts();

// // filter
// export const getValue = state => state.contacts.filter;
