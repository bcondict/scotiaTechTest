package com.scotiatech.demo.dto;

import java.time.LocalDateTime;

public class ProductDTO {

    private String id;
    private String code;
    private String name;
    private String description;
    private LocalDateTime regDate;
    private LocalDateTime modDate;
    private Boolean state;

    public ProductDTO() {}
    public ProductDTO(String id, String code, String name, String description, LocalDateTime regDate, LocalDateTime modDate, boolean state) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.regDate = regDate;
        this.modDate = modDate;
        this.state = state;
    }

    public String getId() {
        return id;
    }

    public void setId(String productId) {
        this.id = productId;
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

    public LocalDateTime getRegDate() {
        return regDate;
    }

    public void setRegDate(LocalDateTime regDate) {
        this.regDate = regDate;
    }

    public LocalDateTime getModDate() {
        return modDate;
    }

    public void setModDate(LocalDateTime modDate) {
        this.modDate = modDate;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }
}
