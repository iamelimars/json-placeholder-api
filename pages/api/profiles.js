import * as profiles from '../../data/profiles.json'

export default (req, res) => {
    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json(profiles)
        
    }, 5000);
}