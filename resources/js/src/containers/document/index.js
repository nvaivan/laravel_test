import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import {Route, Switch} from 'react-router-dom';

import Navigators from './../../components/layouts/navigators';
import SearchBar from './../../components/raws/search-bar';
import UploadBar from './../../components/raws/upload-bar';
import FileDocumentDetail from './detail';
import HomePage from './home';

import { fileDocumentActions } from './actions';
import FullScreenLoading from '../../components/shared/loading/full-screen';
import ActivityStatus from '../../common/enum/activity';

const navWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  navBar: {
    [theme.breakpoints.up('sm')]: {
      width: navWidth,
      flexShrink: 0,
      background: '#f3f3f3'
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    border: '1px solid #E8EAEF'
  },
  mainContent: {
    flex: 1,
    padding: '20px 36px',
    background: 'white',
  },
});

const _FileDocument = ({classes, fetchFileReader, uploadFile, searchFileReader, fileReaderStore, ...other}) => {
  const handleUploadFile = (file) => {
    if (file) {
      const data = new FormData();
      data.append('fileUpload', file);
      uploadFile(data);
    }
  }

  const handleSearchFile = (search) => {
    if (search) {
      const data = new FormData();      
      data.append('search', search);      
      searchFileReader(data);
    }
  }

  useEffect(() => {
    fetchFileReader();
  }, []);
  useEffect(() => {
      
    if (fileReaderStore.error && fileReaderStore.error[0] === 'message') {
        alert(fileReaderStore.error[1]);
    }
  }, [fileReaderStore.error]);
  return (
    <div className={classes.root}>
      {fileReaderStore.activityStatus == ActivityStatus.Loading && <FullScreenLoading />}
      <div className={classes.navBar}>
            <SearchBar searchFileReader={handleSearchFile}/>
            <UploadBar onChangeFile={handleUploadFile}/>
            <Navigators items={fileReaderStore.fileReaders} />
      </div>
      <div className={classes.appContent}>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/:documentId' render={(props) => <FileDocumentDetail {...props} />}/>
          
        </Switch>
      </div>
    </div>
  );
}



const mapStateToProps = (rootReducer) => {
  return { fileReaderStore: rootReducer.fileReaderReducer };
}

const mapDispatchToProps = {
  fetchFileReader: fileDocumentActions.fetchFileReader,
  uploadFile: fileDocumentActions.uploadFile,
  searchFileReader: fileDocumentActions.searchFileReader,
}
const FileDocument = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(_FileDocument));
export default FileDocument;