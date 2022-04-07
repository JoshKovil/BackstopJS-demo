module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper.js')(page, scenario);

  // add more ready handlers here...
};



