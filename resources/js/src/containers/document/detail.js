import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Header from '../../components/layouts/header'
import MainContent from '../../components/layouts/main-content'
import {fileDocumentActions} from './actions';
import ActivityStatus from '../../common/enum/activity';

const styles = theme => ({
});

const _FileDocumentDetail = ({classes, items, fetchDetail, fileReaderStore, ...other}) => {
  const { match } = other;
  const documentId = match.params.documentId;
  let item = fileReaderStore.fileReader;
  useEffect(() => {
    fetchDetail(documentId);
  }, [documentId]);
  return (
    <>
      <Header>
        Document #{documentId}
      </Header>
      <MainContent>
        {item && <div dangerouslySetInnerHTML={{__html: item.content}}></div>}
      </MainContent>
    </>
  );
}

const mapStateToProps = (rootReducer) => {
  return { fileReaderStore: rootReducer.fileReaderReducer };
}

const mapDispatchToProps = {
  fetchDetail: fileDocumentActions.fetchDetail,
}
const FileDocumentDetail = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(_FileDocumentDetail));
export default FileDocumentDetail;