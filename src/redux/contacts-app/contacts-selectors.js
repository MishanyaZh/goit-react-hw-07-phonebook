// filter
export const getFilterFromState = state => state.filter;

// contactlist
export const getVisibleContacts = ({ data, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  if (data) {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
};
