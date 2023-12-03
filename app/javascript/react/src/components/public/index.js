
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	modal_battery: tryRequire('./modal_battery.svg') || require('./questionMark.png'),
	modal_location: tryRequire('./modal_location.svg') || require('./questionMark.png'),
	modal_speed: tryRequire('./modal_speed.svg') || require('./questionMark.png'),
	modal_skills: tryRequire('./modal_skills.svg') || require('./questionMark.png'),
	modal_close: tryRequire('./modal_close.svg') || require('./questionMark.png'),	
}