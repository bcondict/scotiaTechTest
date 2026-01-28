package com.scotiatech.demo.dto;

public class CreateProductDTO {

    private String code;
    private String name;
    private String description;
    private Boolean state;

    public CreateProductDTO() {}
    public CreateProductDTO(String code, String name, String description, boolean state) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.state = state;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String productCode) {
        this.code = productCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String productName) {
        this.name = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String productDescription) {
        this.description = productDescription;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "Product {code='" + code + "', name='" + name + "', description='" + description + "', state='" + state + '}';
    }
}
