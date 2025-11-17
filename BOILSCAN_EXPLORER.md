# 🔍 BOILScan - Blockchain Explorer

## Overview

BOILScan adalah blockchain explorer untuk monitoring semua aktivitas di BOIL ecosystem, termasuk transaksi BOIL token, stBOIL token, staking activities, dan token transfers secara real-time.

---

## 🚀 Features

### **1. Real-Time Transaction Monitoring**
```
✅ Live transaction feed
✅ Transaction hash tracking
✅ Transfer monitoring (BOIL & stBOIL)
✅ Staking/unstaking activities
✅ Reward distributions
✅ Fee tracking
✅ Status verification
```

### **2. Token Holder Analytics**
```
✅ Top holder rankings
✅ Balance tracking
✅ Percentage ownership
✅ Address lookup
✅ Distribution charts
```

### **3. Staking Pool Monitoring**
```
✅ All active pools
✅ Total staked per pool
✅ Active stakers count
✅ Pool APY tracking
✅ Average stake calculation
✅ Pool status
```

### **4. Search Functionality**
```
✅ Transaction hash search
✅ Address lookup
✅ Pool name search
✅ Real-time filtering
```

---

## 📊 Main Statistics

### **Network Stats:**
```
Total Transactions: 45,678
Token Holders: 3,247
Total Staked: 450,000 BOIL
Staking Ratio: 45%
Average Block Time: 2.3s
TPS (Transactions Per Second): 1,250
```

### **Token Supply:**
```
BOIL Supply: 1,000,000
stBOIL Supply: 450,000
Circulating: 550,000 BOIL
Staked: 450,000 BOIL
```

---

## 🗂️ Tabs & Sections

### **Tab 1: Transactions**

**Recent Transaction Feed:**
```
Columns:
- Type (stake, unstake, transfer, reward)
- Transaction Hash (with copy button)
- From Address
- To Address/Pool
- Amount (BOIL or stBOIL)
- Fee
- Timestamp
- Status

Features:
- Color-coded by type
- Icon indicators
- Copy hash functionality
- Live timestamps
- Reward tracking
- Load more pagination
```

**Transaction Types:**
```
🟢 Stake - Deposit to pool (green badge)
🟡 Unstake - Withdraw from pool (yellow badge)
🔵 Transfer - Token transfer (blue badge)
🟠 Reward - Staking rewards (orange badge)
```

---

### **Tab 2: Top Holders**

**Holder Rankings:**
```
Columns:
- Rank (#1, #2, #3...)
- Wallet Address (with copy)
- Balance (BOIL amount)
- Percentage (% of supply)
- Visual progress bar
- Token Type (BOIL/stBOIL)

Features:
- Top 5+ holders displayed
- Balance visualization
- Percentage calculation
- Address copy function
- Ranking system
```

**Top 5 Example:**
```
#1: 125,000 BOIL (12.5%)
#2: 98,500 BOIL (9.85%)
#3: 87,250 BOIL (8.73%)
#4: 75,000 BOIL (7.50%)
#5: 64,500 BOIL (6.45%)
```

---

### **Tab 3: Staking Pools**

**Active Pools Monitoring:**
```
For Each Pool:
- Pool Name
- Status Badge (Active)
- APY Display
- Total Staked
- Active Stakers Count
- Average Stake per User

Features:
- Live pool metrics
- APY tracking
- Staker analytics
- Pool comparison
```

**Pool Details:**
```
Sumatra Oil & Gas Pool:
- Total Staked: 185,000 BOIL
- Stakers: 847
- APY: 58%
- Avg Stake: 218 BOIL

Riau Energy Pool:
- Total Staked: 165,000 BOIL
- Stakers: 692
- APY: 62%
- Avg Stake: 238 BOIL

PNG Gas Reserve Pool:
- Total Staked: 100,000 BOIL
- Stakers: 412
- APY: 75%
- Avg Stake: 243 BOIL
```

**Staking Summary Cards:**
```
Total Staked BOIL: 450,000
Total Stakers: 1,951
Average Pool APY: 63.5%
```

---

## 🎨 Design Elements

### **Color Coding:**
```
Transaction Types:
- Stake: Green (#00FF88)
- Unstake: Yellow/Gold (#FFB800)
- Transfer: Cyan (#00D4FF)
- Reward: Orange (#FF6B00)

Status:
- Success: Green badge
- Pending: Yellow badge
- Failed: Red badge

Tokens:
- BOIL: Orange highlight
- stBOIL: Gold highlight
```

### **Icons:**
```
Activity: Transaction activity
Search: Search bar
Copy: Copy to clipboard
Check: Copied confirmation
Clock: Timestamp
Wallet: Address/holder
Zap: Staking
ArrowUpRight: Stake/Send
ArrowDownLeft: Unstake/Receive
ExternalLink: View details
Hash: Transaction hash
```

---

## 🔍 Search & Filter

### **Search Capabilities:**
```
Search by:
✅ Transaction Hash (0x7f3a2...9d4e1)
✅ Wallet Address (0xa1b2c...3d4e5)
✅ Pool Name (Sumatra Pool)
✅ Token Type (BOIL, stBOIL)

Real-time filtering
Auto-complete suggestions
```

---

## 📱 Interactive Features

### **Copy Functionality:**
```
Copy Transaction Hash:
- Click copy icon
- Hash copied to clipboard
- Check icon confirmation (2s)
- Returns to copy icon

Copy Wallet Address:
- Same functionality
- Visual feedback
- User-friendly UX
```

### **Live Updates:**
```
✅ Real-time transaction feed
✅ Auto-refresh stats
✅ Live timestamps ("2 mins ago")
✅ Dynamic status updates
✅ Instant search results
```

---

## 🎯 Use Cases

### **1. Investor Monitoring:**
```
- Track own transactions
- Monitor rewards
- Check staking status
- View pool performance
- Verify transfers
```

### **2. Pool Analysis:**
```
- Compare pool APYs
- Check total staked
- See active stakers
- Calculate returns
- Find best pools
```

### **3. Token Tracking:**
```
- Monitor BOIL transfers
- Track stBOIL movements
- Verify transactions
- Check balances
- Analyze distribution
```

### **4. Transparency:**
```
- Public verification
- On-chain proof
- Real-time data
- Trust building
- Community confidence
```

---

## 📁 File Structure

```
/app/boilscan/
  └── page.tsx          # BOILScan page route

/components/
  └── BOILScan.tsx      # Main explorer component

Features:
- Search bar
- Stats grid (8 metrics)
- Tab navigation (3 tabs)
- Transaction table
- Holder rankings
- Pool monitoring
- Copy functionality
- Interactive UI
```

---

## 🌐 Access

### **URL:**
```
http://localhost:3000/boilscan
```

### **Navigation:**
```
Direct: /boilscan
From Homepage: Link in footer/menu
From Dashboard: "View on BOILScan" links
```

---

## 📊 Data Structure

### **Transaction Object:**
```typescript
{
  hash: string          // Transaction hash
  type: string          // stake|unstake|transfer|reward
  from: string          // Sender address/pool
  to: string            // Receiver address/pool
  amount: string        // Token amount
  token: string         // BOIL or stBOIL
  reward?: string       // Reward amount (optional)
  timestamp: string     // Time ago
  status: string        // success|pending|failed
  fee: string           // Transaction fee
}
```

### **Holder Object:**
```typescript
{
  address: string       // Wallet address
  balance: string       // Token balance
  percentage: number    // % of total supply
  type: string          // BOIL or stBOIL
}
```

### **Pool Object:**
```typescript
{
  pool: string          // Pool name
  totalStaked: string   // Total staked amount
  stakers: number       // Active stakers
  apy: string           // Annual percentage yield
  status: string        // active|inactive
}
```

---

## 🎨 Visual Components

### **Stats Cards (8 cards):**
```
Row 1:
1. Total Transactions (with live badge)
2. Token Holders
3. Total Staked
4. Staking Ratio

Row 2:
5. BOIL Supply
6. stBOIL Supply
7. Avg Block Time
8. TPS (Transactions Per Second)
```

### **Transaction Table:**
```
Full-width responsive table
8 columns
Hover effects
Color-coded types
Copy buttons
Pagination
Mobile-friendly overflow
```

### **Holder Rankings:**
```
Rank badges (#1, #2, #3)
Progress bars
Copy functionality
Visual percentages
Professional layout
```

### **Pool Cards:**
```
Pool header with status
APY prominently displayed
3-column metrics grid
Hover effects
Active status indicators
```

---

## 💡 Professional Features

### **User Experience:**
```
✅ Clean, modern design
✅ Easy navigation
✅ Quick search
✅ Copy convenience
✅ Clear data display
✅ Responsive layout
✅ Fast loading
✅ Intuitive UI
```

### **Data Presentation:**
```
✅ Color-coded categories
✅ Icon indicators
✅ Badge labels
✅ Progress bars
✅ Formatted numbers
✅ Relative timestamps
✅ Status badges
✅ Visual hierarchy
```

### **Functionality:**
```
✅ Real-time updates
✅ Search & filter
✅ Copy to clipboard
✅ Tab navigation
✅ Pagination
✅ Load more
✅ Hover effects
✅ Responsive design
```

---

## 🔄 Future Enhancements

### **Planned Features:**
```
🔄 Advanced filtering
🔄 Date range selection
🔄 Export to CSV
🔄 Transaction details modal
🔄 Address page (dedicated)
🔄 Charts & graphs
🔄 Price tracking
🔄 Volume analytics
🔄 Block explorer
🔄 Contract verification
🔄 API access
🔄 Webhooks
```

---

## ✅ Summary

**BOILScan Explorer Features:**

✅ **Real-Time Monitoring** - Live transaction feed
✅ **Complete Transparency** - All on-chain data visible
✅ **Multi-Token Support** - BOIL & stBOIL tracking
✅ **Staking Analytics** - Pool performance metrics
✅ **Holder Rankings** - Top holder leaderboard
✅ **Search Function** - Find any transaction/address
✅ **Copy Features** - Easy hash/address copying
✅ **Professional UI** - Clean, modern design
✅ **Responsive** - Works on all devices
✅ **Tab Navigation** - Organized data sections

**Access:** http://localhost:3000/boilscan

**Purpose:** Complete blockchain transparency and monitoring for BOIL ecosystem

---

**Status:** ✅ **BOILSCAN EXPLORER READY!**

Professional blockchain explorer for monitoring all BOIL & stBOIL transactions, staking activities, and token movements! 🔍🚀
