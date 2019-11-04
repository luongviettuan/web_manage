import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
class ModalInfo extends React.Component {
  render() {
    const {modal,message, link} = this.props
    return (
      <div>
        <Modal fade={false} isOpen={modal}>
          <ModalBody>
            {message}
          </ModalBody>
          <ModalFooter>
            <Link to={link}>
                <Button color='success'>OK</Button>
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalInfo;