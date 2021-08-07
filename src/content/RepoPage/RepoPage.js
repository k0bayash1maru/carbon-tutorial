import React from 'react';
import ReactDOM from 'react-dom';
import { BulletChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import './plex-and-carbon-components.css';
import RepoTable from './RepoTable';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'Repo 1',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '2',
    name: 'Repo 2',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '3',
    name: 'Repo 3',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
];

const data = [
  {
    title: 'Infuse',
    group: 'D5',
    marker: 100,
    value: 100,
  },
  {
    title: 'Analyze',
    group: 'D4',
    marker: 100,
    value: 100,
  },
  {
    title: 'Organize',
    group: 'D3',
    marker: 100,
    value: 100,
  },
  {
    title: 'Collect-BigSQL',
    group: 'D1',
    marker: 25,
    value: 25,
  },
  {
    title: 'Collect-Db2',
    group: 'D1',
    marker: 100,
    value: 100,
  },
  {
    title: 'Collect-Netezza',
    group: 'D1',
    marker: 50,
    value: 50,
  },
  {
    title: 'TAM',
    group: 'D1',
    marker: 100,
    value: 100,
  },
];
const options = {
  title: 'Expert Labs',
  axes: {
    bottom: {
      mapsTo: 'value',
      extendLinearDomainBy: 'marker',
    },
    left: {
      scaleType: 'labels',
      mapsTo: 'title',
    },
    right: {
      scaleType: 'labels-ratio',
      mapsTo: 'title',
    },
  },
  height: '400px',
};

const RepoPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <RepoTable headers={headers} rows={rows} />
        </div>
        <div>
          <BulletChart data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
