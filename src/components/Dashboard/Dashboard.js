import React from 'react';
import StaticAppBar from '../StaticAppBar/StaticAppBar.react';
import { Paper } from 'material-ui';
import Cookies from 'universal-cookie';
import MySkills from './MySkills';
import MyRatings from './MyRatings';
import MyAnalytics from './MyAnalytics';
import './Dashboard.css';
const cookies = new Cookies();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      showPreview: false,
      chatbotOpen: false,
      createBotWizard: true,
    };
  }
  componentDidMount() {
    document.title = 'SUSI.AI - Dashboard';
  }
  render() {
    if (!cookies.get('loggedIn')) {
      return (
        <div>
          <StaticAppBar {...this.props} />
          <div>
            <p style={styles.loggedInError}>Please login to view dashboard.</p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <StaticAppBar {...this.props} />
        <div style={styles.home} className="botbuilder-page-wrapper">
          <br />
          <br />
          <h1 className="center" style={{ color: 'black' }}>
            My Dashboard
          </h1>
          <br />
          <Paper
            style={styles.paperStyle}
            className="botBuilder-page-card"
            zDepth={1}
          >
            <h1 style={{ color: 'rgba(0,0,0,.65)' }}>My Skills</h1>
            <MySkills />
          </Paper>
          <Paper
            style={styles.paperStyle}
            className="botBuilder-page-card"
            zDepth={1}
          >
            <h1 style={{ color: 'rgba(0,0,0,.65)' }}>My Ratings</h1>
            <MyRatings />
          </Paper>
          <Paper
            style={styles.paperStyle}
            className="botBuilder-page-card"
            zDepth={1}
          >
            <h1 style={{ color: 'rgba(0,0,0,.65)' }}>My Analytics</h1>
            <MyAnalytics />
          </Paper>
        </div>
      </div>
    );
  }
}

const styles = {
  home: {
    width: '100%',
  },
  bg: {
    textAlign: 'center',
    padding: '30px',
  },
  paperStyle: {
    width: '100%',
    marginTop: '20px',
  },
  tabStyle: {
    color: 'rgb(91, 91, 91)',
  },
  previewButtonStyle: {
    width: '100px',
    marginTop: '50px',
  },
  loggedInError: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: '100px',
    fontSize: '50px',
    marginTop: '300px',
  },
};

Dashboard.propTypes = {};

export default Dashboard;
