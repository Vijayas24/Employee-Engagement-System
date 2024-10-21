document.addEventListener('DOMContentLoaded', () => {
    // Employee data
    const employees = [
      { name: "John Doe", status: "busy" },
      { name: "Jane Smith", status: "free" },
      { name: "Mark Brown", status: "busy" }
    ];
  
    const employeeList = document.getElementById('employees');
  
    // Populate the employee list
    employees.forEach((employee, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${employee.name} 
        <button class="${employee.status}" onclick="toggleStatus(${index})">
          ${employee.status}
        </button>
        <button onclick="makeCall(${index})">Ping</button>
      `;
      employeeList.appendChild(li);
    });
  
    // Function to toggle the employee's status
    window.toggleStatus = function(index) {
      const button = employeeList.children[index].querySelector('button');
      const employee = employees[index];
  
      // Toggle between 'busy' and 'free' status
      if (employee.status === 'busy') {
        employee.status = 'free';
        button.classList.remove('busy');
        button.classList.add('free');
        button.innerText = 'free';
      } else {
        employee.status = 'busy';
        button.classList.remove('free');
        button.classList.add('busy');
        button.innerText = 'busy';
      }
    };
  
    // Function to initiate the call
    window.makeCall = function(index) {
      const employee = employees[index];
  
      // Check if the employee is available
      if (employee.status === 'free') {
        alert(`Calling ${employee.name}...`);
        startVideoCall();
      } else {
        alert(`${employee.name} is not available.`);
      }
    };
  
    // Function to simulate starting a video call
    function startVideoCall() {
      alert("Starting video call (WebRTC)...");
    }
  });
  