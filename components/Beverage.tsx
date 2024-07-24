import React from "react";
import { Beverage as BeverageType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BeverageProps {
  beverage: BeverageType;
}

export const Beverage: React.FC<BeverageProps> = ({ beverage }) => {
  return (
    <Card className="flex-1 min-w-[250px] max-w-[300px]">
      <CardHeader>
        <CardTitle>{beverage.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Quantity: {beverage.quantity}</p>
      </CardContent>
    </Card>
  );
};
