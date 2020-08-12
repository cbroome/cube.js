import React from 'react';
import styles from './MessagesChart.module.css';
import LineChart from "../amCharts/LineChart"
import PropTypes from "prop-types"

export default function MessagesChart(props) {
  const { data } = props

  const options = [
    {
      x: "date",
      y: "messages",
      color: "rgb(29, 155, 209)"
    },
    {
      x: "date",
      y: "reactions",
      color: "rgb(0, 122, 90)"
    }
  ];

  return (
    <div className={styles.root}>
      <h2>
        <span className={styles.messages}>Messages</span> and <span className={styles.reactions}>reactions</span>
      </h2>
      <LineChart data={data} options={options} />
    </div>
  )
}

MessagesChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}