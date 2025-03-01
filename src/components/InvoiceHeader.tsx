import { View, Text, StyleSheet } from "@react-pdf/renderer";

const InvoiceHeader = ({ freelancer, client, invoiceNumber }) => (
  <View /* style={styles.header} */>
    <View /* style={styles.freelancerInfo} */>
      <Text>{freelancer.name}</Text>
      <Text>{freelancer.address.street}</Text>
      {/* More freelancer details */}
    </View>
    <View /* style={styles.invoiceDetails} */>
      <Text>Invoice #{invoiceNumber}</Text>
      <Text>Date: {new Date().toLocaleDateString("ja-JP")}</Text>
    </View>
  </View>
);

// Export for composition
export default InvoiceHeader;
