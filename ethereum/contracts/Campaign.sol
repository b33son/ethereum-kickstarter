// kickstarter/ethereum/contracts/Campaign.sol

pragma solidity ^0.4.17; 

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minContributionAmt) public {
        address campaignAddress = new Campaign(minContributionAmt, msg.sender);
        deployedCampaigns.push(campaignAddress);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    
    struct SpendRequest {
        string description;
        uint value;
        address vendorAddress;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    SpendRequest[] public spendRequests;
    address public manager; 
    uint public minContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    
    function Campaign(uint minContributionAmt, address creator) public {
        manager = creator;
        minContribution = minContributionAmt;
    }
    
    function contribute() public payable {
        require(msg.value >= minContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) 
        public restricted {
            
        require(approvers[msg.sender]);
        
        SpendRequest memory request = SpendRequest({
            description: description,
            value: value,
            vendorAddress: recipient,
            complete: false,
            approvalCount: 0
        });
        
        //SpendRequest request = SpendRequest(description, value, recipient, false);
        
        spendRequests.push(request);
    }
    
    function approveRequest(uint index) public {
        SpendRequest storage spendRequest = spendRequests[index];
        
        // Require that the person calling this function is an approver
        require(approvers[msg.sender]);
        
        // Ensure the person calling hasn't voted already
        require(!spendRequest.approvals[msg.sender]);
        
        spendRequest.approvals[msg.sender] = true;
        spendRequest.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        SpendRequest storage request = spendRequests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));
        request.vendorAddress.transfer(request.value);
        request.complete = true;
    }
}

