import PropTypes from 'prop-types';
import { ContactItem, Text } from './Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/store';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ContactItem>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
