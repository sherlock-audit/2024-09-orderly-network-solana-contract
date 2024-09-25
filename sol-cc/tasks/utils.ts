import { OFTData, OFTPeers, LZConfig, env, name, TEST_NETWORKS, MAIN_NETWORKS} from "./const";
import fs from 'fs';

const ADDRESS_PATH = "./config/address.json"




export async function saveContractAddress(env: env, network: string, name: name, address: string) {
    if (fs.existsSync(ADDRESS_PATH)) {
        const data = fs.readFileSync(ADDRESS_PATH, 'utf-8');
        const oftAddress: OFTData = JSON.parse(data);
        if (!oftAddress[env]) {
            oftAddress[env] = {}
        }
        if (!oftAddress[env][network]) {
            oftAddress[env][network] = {}
        }
        oftAddress[env][network][name] = address;
        fs.writeFileSync(ADDRESS_PATH, JSON.stringify(oftAddress, null, 2));
        console.log(`Address of ${name} saved for ${name} on ${env} ${network}`)
    } else {
        throw new Error("Address file not found")
    }
 }

export async function loadContractAddress(env: env, network: string, name: name) {
 
    if (fs.existsSync(ADDRESS_PATH)) {
        const data = fs.readFileSync(ADDRESS_PATH, 'utf-8');
        const oftAddress: OFTData = JSON.parse(data);
        
        if (oftAddress[env][network][name]) {
            return oftAddress[env][network][name]
        } else {
            throw new Error(`Address for ${name} not found on ${env} ${network}`)
        }
        
    }
}


export function equalDVNs<T>(dvn1: T[], dvn2: T[]): boolean {
    if (dvn1.length !== dvn2.length) {
      return false;
    }
  
    // Sort both arrays
    const sortedDvn1 = dvn1.slice().sort();
    const sortedDvn2 = dvn2.slice().sort();
  
    // Compare each element
    for (let i = 0; i < sortedDvn1.length; i++) {
      if (sortedDvn1[i] !== sortedDvn2[i]) {
        return false;
      }
    }
  
    return true;
  }