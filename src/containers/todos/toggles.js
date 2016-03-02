import React from 'react';
import Toggle from 'material-ui/lib/toggle';

const styles = {
  toggle: {
    marginBottom: 16,
    marginTop: 10,
  }
};

const Toggles = ({ visible, showAll, showCompleted }) => (
    <div style={styles.block}>
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
      />
    </div>
  );


export default Toggles;
