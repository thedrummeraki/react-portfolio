const locations = {
  bg1: {name: 'location.japan.hakone', url: 'https://www.google.com/maps?q=loc:35.2474806,139.0445744'},
  bg2: {name: 'location.japan.tokyo.palace', url: 'https://www.google.com/maps/search/%E7%9A%87%E5%B1%85/@35.683553,139.7512719,16z/data=!3m1!4b1'},
  bg3: {name: 'location.japan.tokyo.shibuya', url: 'https://www.google.com/maps/place/%E6%B8%8B%E8%B0%B7%E9%A7%85/@35.6580382,139.6994471,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b563b00109f:0x337328def1e2ab26!8m2!3d35.6580339!4d139.7016358'},
  bg4: {name: 'location.japan.tokyo.palace', url: 'https://www.google.com/maps/search/%E7%9A%87%E5%B1%85/@35.683553,139.7512719,16z/data=!3m1!4b1'},
  bg5: {name: 'location.japan.tokyo.palace', url: 'https://www.google.com/maps/search/%E7%9A%87%E5%B1%85/@35.683553,139.7512719,16z/data=!3m1!4b1'},
  bg6: {name: 'location.japan.tokyo.palace', url: 'https://www.google.com/maps/search/%E7%9A%87%E5%B1%85/@35.683553,139.7512719,16z/data=!3m1!4b1'},
  bg7: {name: 'location.japan.tokyo.palace', url: 'https://www.google.com/maps/search/%E7%9A%87%E5%B1%85/@35.683553,139.7512719,16z/data=!3m1!4b1'},
  bg8: {name: 'location.japan.kamukura.beach', url: 'https://www.google.com/maps?q=loc:35.3097408,139.5377879'},
  bg9: {name: 'location.japan.chiba', url: 'https://www.google.com/maps?q=loc:35.8170624,140.2716381'},
  bg10: {name: 'location.japan.numazu', url: 'https://www.google.com/maps?q=loc:35.093788,138.8587895'},
  bg11: {name: 'location.canada.toronto.nathan', url: 'https://www.google.com/maps/place/%E3%83%8D%E3%82%A4%E3%82%B5%E3%83%B3%E3%83%BB%E3%83%95%E3%82%A3%E3%83%AA%E3%83%83%E3%83%97%E3%82%B9%E3%83%BB%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2/@43.6527108,-79.3856024,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34cc50761607:0xfd78ef1b308ab9d4!8m2!3d43.6527069!4d-79.3834137'},
  bg12: {name: 'location.canada.ottawa.university', url: 'https://www.google.com/maps/place/%E3%82%AA%E3%82%BF%E3%83%AF%E5%A4%A7%E5%AD%A6/@45.4231101,-75.6853216,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce050a6db98d73:0x188a59c3622fdbae!8m2!3d45.4231064!4d-75.6831329'},
  bg13: {name: 'location.canada.ottawa.rideau', url: 'https://www.google.com/maps/place/%E3%83%AA%E3%83%89%E3%83%BC%E9%81%8B%E6%B2%B3/@45.4220043,-75.6907069,17z/data=!4m5!3m4!1s0x4cce05ba9a3ba4a1:0xf9dd46e580c656a8!8m2!3d45.3959374!4d-75.6883718'},
  bg14: {name: 'location.canada.montebello', url: 'https://www.google.com/maps/place/%E3%83%95%E3%82%A7%E3%82%A2%E3%83%A2%E3%83%B3%E3%83%88+%E3%83%AB+%E3%82%B7%E3%83%A3%E3%83%88%E3%83%BC+%E3%83%A2%E3%83%B3%E3%83%86%E3%83%99%E3%83%AD/@45.6452575,-74.9516332,17z/data=!3m1!4b1!4m8!3m7!1s0x4cce584bdcb2a6a7:0x2b2530aaf408ea45!5m2!4m1!1i2!8m2!3d45.6452538!4d-74.9494445'},
  bg15: {name: 'location.canada.ottawa.mooneys', url: 'https://www.google.com/maps/place/%E3%80%92K1V+1H8+%E3%82%AA%E3%83%B3%E3%82%BF%E3%83%AA%E3%82%AA+%E3%82%AA%E3%82%BF%E3%83%AF+%E3%83%A0%E3%83%BC%E3%83%8B%E3%83%BC%E3%82%BA%E3%83%BB%E3%83%99%E3%82%A4/@45.3674767,-75.700378,15z/data=!3m1!4b1!4m5!3m4!1s0x4cce07d459e70745:0xad1460062e03cad5!8m2!3d45.3674625!4d-75.6916233'},
  bg16: {name: 'location.canada.montreal.lachine', url: 'https://www.google.com/maps/place/%E3%82%AB%E3%83%8A%E3%83%AB%E3%83%BB%E3%83%89%E3%83%BB%E3%83%A9%E3%82%B7%E3%83%BC%E3%83%8C/@45.4642527,-73.6068023,15.71z/data=!4m5!3m4!1s0x4cc910b8d1345bed:0x28241b74967d4dbb!8m2!3d45.4670137!4d-73.6063005'},
  bg17: {name: 'location.canada.toronto.norris', url: 'https://www.google.com/maps/place/%E3%83%8E%E3%83%AA%E3%82%B9%E3%83%BB%E3%82%AF%E3%83%AC%E3%82%BB%E3%83%B3%E3%83%88%E3%83%BB%E3%83%91%E3%83%BC%E3%82%B1%E3%83%83%E3%83%88/@43.6110509,-79.4900974,17z/data=!4m13!1m7!3m6!1s0x0:0x0!2zNDPCsDM2JzM5LjgiTiA3OcKwMjknMTYuNSJX!3b1!8m2!3d43.6110509!4d-79.4879087!3m4!1s0x882b49e1f0d358ad:0x6bfea2c2835700c9!8m2!3d43.610904!4d-79.4868987'},
  bg18: {name: 'location.canada.toronto.norris', url: 'https://www.google.com/maps/place/%E3%83%8E%E3%83%AA%E3%82%B9%E3%83%BB%E3%82%AF%E3%83%AC%E3%82%BB%E3%83%B3%E3%83%88%E3%83%BB%E3%83%91%E3%83%BC%E3%82%B1%E3%83%83%E3%83%88/@43.6110509,-79.4900974,17z/data=!4m13!1m7!3m6!1s0x0:0x0!2zNDPCsDM2JzM5LjgiTiA3OcKwMjknMTYuNSJX!3b1!8m2!3d43.6110509!4d-79.4879087!3m4!1s0x882b49e1f0d358ad:0x6bfea2c2835700c9!8m2!3d43.610904!4d-79.4868987'},
  bg19: {name: 'location.canada.ottawa.parliament', url: 'https://www.google.com/maps/place/%E3%82%AB%E3%83%8A%E3%83%80%E8%AD%B0%E4%BC%9A/@45.4217657,-75.7037564,16z/data=!4m8!1m2!2m1!1sparliament+hill!3m4!1s0x4cce04ff4fe494ef:0x26bb54f60c29f6e!8m2!3d45.4235937!4d-75.700929'},
}

export default backgroundId => {
  const backgroundConfig = locations[`bg${backgroundId}`];
  if (!backgroundConfig) {
    console.warn(`No config available for background ${backgroundId}`);
    return null;
  }
  return backgroundConfig;
};
