import React from 'react';
import Toggle from 'material-ui/lib/toggle';

const styles = {
  toggle: {
    marginBottom: 16,
    marginTop: 10,
  },
  general: {
    // maxWidth: 450
  }

};

const Toggles = ({ visible, showAll, showCompleted, showInProgress }) => (
    <div style={styles.general}>
      <Toggle
        label="Show All"
        onClick={showAll}
        toggled={visible.all}
        style={styles.toggle}
      />
      <Toggle
        label="Show Completed"
        toggled={visible.comp}
        onClick={showCompleted}
        style={styles.toggle}
      />
      <Toggle
        label="Show In-Progress"
        toggled={visible.prog}
        style={styles.toggle}
        onClick={showInProgress}
      />
    </div>
  );


export default Toggles;
