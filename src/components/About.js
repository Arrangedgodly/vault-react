function About() {
  return (
    <div className="about">
      <h3 className="about-header">Getting Started</h3>
      <ul className="about-list">
        <li className="about-list_item">Select 'Previous Counts' to establish your store's location/view previous counts</li>
        <li className="about-list_item">Select 'Counter' to get to the Counter</li>
      </ul>
      <h3 className="about-header">Utilizing the Counter</h3>
      <ul className="about-list">
        <li className="about-list_item">Works similarly to counting a drawer in with Flowhub</li>
        <li className="about-list_item">Count the number of each denomination of money you have</li>
        <li className="about-list_item">No need for dollar conversions: the app totals your cash automatically</li>
        <li className="about-list_item">When you are finished counting, click submit in the bottom left (you must have a store selected to keep record of your counts)</li>
        <li className="about-list_item">Values are reset after successfully submitting a count</li>
      </ul>
      <h3 className="about-header">Utilizing Previous Counts</h3>
      <ul className="about-list">
        <li className="about-list_item">Posts a list of counts in order of most recent date to least</li>
        <li className="about-list_item">Tapping on any count will open a dropdown menu featuring each individual denomination total, as well as an entire vault total</li>
        <li className="about-list_item">If you submit a count with an error, you can remove it with the 'Delete' button</li>
      </ul>
    </div>
  );
}

export default About;