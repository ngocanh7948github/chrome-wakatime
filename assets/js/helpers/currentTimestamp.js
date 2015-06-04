/**
 * Returns UNIX timestamp
 * 
 * @return integer
 */
export default function(){
    return Math.round((new Date()).getTime() / 1000);
}