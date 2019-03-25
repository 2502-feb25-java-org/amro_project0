package com.revature;

public class INT2HEX {
	
	// return an array of char represent the hex value
	public static char[] int2hex(int n) {
        char[] hexaDeciNum = new char[100]; 
       
        int i = 0; 
        while(n!=0) 
        {     
            int rem  = 0; 
           
             rem = n % 16; 
             n = n/16;
           
            if(rem < 10) 
            { 
            	// adding 48 from Ascii table which is 0
                hexaDeciNum[i] = (char)(rem + 48); 
                i++; 
            } 
            else
            { 
            	// adding 55 to the rem and parse it to char (ex. 10 + 55 = 65  = A in ascii table)
                hexaDeciNum[i] = (char)(rem + 55); 
                i++; 
            } 
            
        } 
        return hexaDeciNum;
	}

}
