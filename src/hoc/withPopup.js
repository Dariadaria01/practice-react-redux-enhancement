import React from 'react';

const withPopup = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      isOpen: true,
    };

    closePopup = () => {
      this.setState({ isOpen: false });
    };

    render() {
      const { isOpen } = this.state;
      return (
        <>
          {isOpen && (
            <div style={styles.overlay}>
              <div style={styles.popup}>
                <button style={styles.closeBtn} onClick={this.closePopup}>
                  X
                </button>
                <WrappedComponent {...this.props} />
              </div>
            </div>
          )}

          {!isOpen && <WrappedComponent {...this.props} />}
        </>
      );
    }
  };
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    minWidth: '200px',
    textAlign: 'center',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    fontSize: '16px',
  },
};

export default withPopup;