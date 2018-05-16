/**
 * Copyright 2018 Goldman Sachs.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package pojo;

/**
 * This class will define a company and its attributes
 * Look at resources/data/companyInfo.json
 */
public class Company {

    // Define the attributes of a Company based on the
    // provided data in resources/data
    @JsonProperty
    private String symbol;
    @JsonProperty
    private String name;
    @JsonProperty
    private String headquartersCity;
    @JsonProperty
    private String headquartersStateOrCountry;
    @JsonProperty
    private int numberOfEmployees;
    @JsonProperty
    private String sector;
    @JsonProperty
    private String industry;

    // TODO - add getter and setter methods for your attributes
    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHeadquartersCity() {
        return headquartersCity;
    }

    public void setHeadquartersCity(String headquartersCity) {
        this.headquartersCity = headquartersCity;
    }

    public String getHeadquartersStateOrCountry() {
        return headquartersStateOrCountry;
    }

    public void setHeadquartersStateOrCountry(String headquartersStateOrCountry) {
        this.headquartersStateOrCountry = headquartersStateOrCountry;
    }

    public int getNumberOfEmployees() {
        return numberOfEmployees;
    }

    public void setNumberOfEmployees(int numberOfEmployees) {
        this.numberOfEmployees = numberOfEmployees;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }


    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;

        Company company = (Company) object;

        if (numberOfEmployees != company.numberOfEmployees) return false;
        if (symbol != null ? !symbol.equals(company.symbol) : company.symbol != null) return false;
        if (name != null ? !name.equals(company.name) : company.name != null) return false;
        if (headquartersCity != null ? !headquartersCity.equals(company.headquartersCity) : company.headquartersCity != null)
            return false;
        if (headquartersStateOrCountry != null ? !headquartersStateOrCountry.equals(company.headquartersStateOrCountry) : company.headquartersStateOrCountry != null)
            return false;
        if (sector != null ? !sector.equals(company.sector) : company.sector != null) return false;
        if (industry != null ? !industry.equals(company.industry) : company.industry != null) return false;

        return true;
    }

    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (symbol != null ? symbol.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (headquartersCity != null ? headquartersCity.hashCode() : 0);
        result = 31 * result + (headquartersStateOrCountry != null ? headquartersStateOrCountry.hashCode() : 0);
        result = 31 * result + numberOfEmployees;
        result = 31 * result + (sector != null ? sector.hashCode() : 0);
        result = 31 * result + (industry != null ? industry.hashCode() : 0);
        return result;
    }
}