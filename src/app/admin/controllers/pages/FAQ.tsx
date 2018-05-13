// Library Imports
import { connect, Dispatch } from 'react-redux';

// App Imports
import { addMessage } from '@app/common/actions';

// Component Imports
import FAQ from '@app/admin/components/pages/FAQ';

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  addMessage: (message: Message) => dispatch(addMessage(message)),
});

const connectedFAQ = connect(null, mapDispatchToProps)(FAQ);

export default connectedFAQ;
