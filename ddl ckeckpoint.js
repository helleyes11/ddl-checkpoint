/*Tables Creation*/

CREATE TABLE Customer (
	Customer_id (VARCHAR2(20)) CONSTRAINT pr_key PRIMARY KEY,

	Customer_Name (VARCHAR2(20)) CONSTRAINT n_n NOT NULL,
	Customer_tel NUMBER NULL,
);
CREATE TABLE Product (
	Product_id (VARCHAR2(20)) CONSTRAINT pr_key PRIMARY KEY,
	Product_Name (VARCHAR2(20)) CONSTRAINT n_n  NOT NULL,
	Price NUMBER CONSTRAINT price_value CHECK (Price > 0),

);
CREATE TABLE Orders (
	Customer_id NUMBER CONSTRAINT id_value CHECK(customer_id > 0), CONSTRAINT fk_cid FOREIGN KEY (Customer_id) REFERENCES Customer (Customer_id),                                            
	Product_id (VARCHAR2(20)) NOT NULL, CONSTRAINT fk_pid FOREIGN KEY (Product_id) REFERENCES Product (Product_id),
	Quantity NUMBER, NULL
    Total_amount NUMBER, NULL
);

/*Tables Additions*/


ALTER TABLE PRODUCT ADD Category (VARCHAR2(20));
ALTER TABLE ORDERS ADD OrderDate (DATE) DEFAULT SYSDATE();