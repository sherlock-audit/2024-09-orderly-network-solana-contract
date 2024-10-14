pub fn to_bytes32(bytes: &[u8]) -> [u8; 32] {
    let mut bytes32 = [0u8; 32];
    // add ledding zeros to the bytes
    bytes32[32 - bytes.len()..].copy_from_slice(bytes);
    bytes32
}

pub fn bytes32_to_hex(bytes: &[u8; 32]) -> String {
    let broker_hash_hex: String = bytes
        .iter()
        .map(|byte| format!("{:02x}", byte))
        .collect::<Vec<String>>()
        .join("");
    broker_hash_hex
}

pub fn vec_to_hex(vec: &Vec<u8>) -> String {
    let hex_string = vec.iter().map(|byte| format!("{:02x}", byte)).collect();
    hex_string
}

pub fn hex_to_vec(hex: &str) -> Vec<u8> {
    hex.as_bytes().to_vec()
}
