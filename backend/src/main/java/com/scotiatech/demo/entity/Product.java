package com.scotiatech.demo.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Table("products")
public class Product implements Persistable<String> {

    @Id
    @Column("product_id")
    private String id;

    @Column("product_code")
    private String code;

    @Column("product_name")
    private String name;

    @Column("product_description")
    private String description;

    @Column("reg_date")
    private LocalDateTime regDate;

    @Column("mod_date")
    private LocalDateTime modDate;

    @Column("state")
    private Boolean state;

    @Transient
    private boolean isNew = true;

    public Product() {}

    public Product(String id, String code, String name, String description, LocalDateTime regDate, LocalDateTime modDate, boolean state) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.regDate = regDate;
        this.modDate = modDate;
        this.state = state;
    }

    @Override
    public String getId() {
        return id;
    }

    public void setId(String productId) {
        this.id = productId;
    }

    @Override
    public boolean isNew() {
        return isNew;
    }

    public void markNotNew() {
        this.isNew = false;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
